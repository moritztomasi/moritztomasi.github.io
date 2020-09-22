#!/bin/sh

function build_resume() {
    language=$1;
    # Create a temporary directory to build the resume.
    mkdir _tmp_resume
    # Copy the file specified by file name to the temporary directory.
    cp ./src/data/"resume_$language.json" ./_tmp_resume/resume.json
    # Change to the temporary directory where the resume can be built.
    cd ./_tmp_resume
    # Build the resume.
    resume export resume.pdf --theme paper

    cd ..

    # Copy the resume to the assets directory.
    cp ./_tmp_resume/resume.pdf ./src/assets/"Moritz_Tomasi_CV_$language.pdf"
    # Delete the temporary resume directory.
    rm -rf _tmp_resume
}

build_resume DE
build_resume EN