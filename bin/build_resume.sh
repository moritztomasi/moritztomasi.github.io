mkdir _tmp_resume

cp ./src/resume/resume.json ./_tmp_resume

cd ./_tmp_resume

resume export resume.pdf --theme paper

cd ..

cp ./_tmp_resume/resume.pdf ./src/assets/resume.pdf

rm -rf _tmp_resume

