import yaml
import requests

# This file will generate a huge yaml data structure that can be written
# to tests.yml, for the purposes of testing things that read tests.yml.
#
# Usage: python3 generate_tests.py > tests.yml


lkft_groups = [
    {
        "domain": "https://staging-qa-reports.linaro.org",
        "group_slug": "lkft",
        "group_id": 3,
    },
    {
        "domain": "https://qa-reports.linaro.org",
        "group_slug": "lkft",
        "group_id": 3,
    }
]

tests_data = []
for group in lkft_groups:
    url=f"{group['domain']}/api/projects/?group={group['group_id']}"
    projects = requests.get(url)
    for project in projects.json().get('results', []):
        tests_data.append({
            'name': project['slug'],
            'project_url': project['url'],
            'squad_url': f"{group['domain']}/{group['group_slug']}/{project['slug']}/"
        })

print(yaml.dump({'tests': {'branches': tests_data}}))
