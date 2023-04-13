#!/usr/bin/env fish

set script_dir (cd (dirname (status -f)); and pwd)
source $script_dir/utils.fish

# ensure_deb https://github.com/muesli/obs-cli/releases/download/v0.5.0/obs-cli_0.5.0_linux_amd64.deb

set_window "Go By Example" -x 10 -y 160  
set_window "go-slicer" -x 1933 -y 160
set_window "obs" -x 3875 -y 190 -w 1099 -h 1169
brave http://localhost:5173/