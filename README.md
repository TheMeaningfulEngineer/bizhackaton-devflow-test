```
mkdir root_project_dir
cd root_project_dir
git clone git@github.com:TheMeaningfulEngineer/bizhackaton-devflow-test.git

# Ovo radimo da se python paketi koje cemo instalirati ne instaliranu na razini cijelog sustava nego u sandboxed environmentu.
pip3 install virtualenv
virtualenv -p python3 dev_environment
source dev_environment/bin/activate

cd bizhackaton-devflow-test
pip3 install requirements.txt
export FLASK_APP=hello.py
flask run




