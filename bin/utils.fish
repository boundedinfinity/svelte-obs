#!/usr/bin/env fish

function ee; echo $argv; eval $argv; end
set script_dir (cd (dirname (status -f)); and pwd)

function chrome
    set url $argv[1]
    ee "google-chrome '$url' &"
end

function brave
    set url $argv[1]
    ee "brave-browser '$url' &"
end

function set_window
    set n $argv[1]
    set g 0 # gravity
    set x -1;
    set y -1;
    set h 1080;
    set w 1920;
    
    getopts $argv | while read -l key value
        switch $key
        case g; set g $value
        case w; set w $value
        case h; set h $value
        case x; set x $value
        case y; set y $value
        end
    end

    ee "wmctrl -r '$n' -e $g,$x,$y,$w,$h"
end

function ensure_deb
    set url $argv[1]
    set name (basename $url)
    set path $HOME/Downloads/$name
    ee "test -e $path || wget -O $path $url"
    ee "sudo dpkg --install $path"
end