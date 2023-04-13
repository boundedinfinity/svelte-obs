#!/usr/bin/env fish

set script_dir (cd (dirname (status -f)); and pwd)
source $script_dir/utils.fish

chrome 'https://docs.google.com/document/d/1v_bogUE3DdIskjOu2hQ2v5gKVJPT22lrTG1guzb8vcg/edit?usp=share_link'