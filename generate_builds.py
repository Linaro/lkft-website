from tabulate import tabulate

class Branch(object):
    def __init__(self, name, squad_name, jenkins_name, label="docker-lkft"):
        self.name = name
        self.squad_name = squad_name
        self.jenkins_name = jenkins_name
        self.label = label
    def get_name(self):
        return self.name
    def get_squad_name(self):
        return self.squad_name
    def get_jenkins_name(self):
        return self.jenkins_name
    def get_label(self):
        return self.label

class Board(object):
    def __init__(self, name, architecture, jenkins_name):
        self.name = name
        self.architecture = architecture
        self.jenkins_name = jenkins_name
        self.branches = self._init_branches()

    def _init_branches(self):
        return [
            # pretty name, squad name, jenkins name
            Branch('next',
                   'linux-next-oe',
                   'openembedded-lkft-linux-next',
                   label="docker-stretch-amd64"
                  ),
            Branch('mainline',
                   'linux-mainline-oe',
                   'openembedded-lkft-linux-mainline',
                   label="docker-stretch-amd64"
                  ),
            Branch('4.14',
                   'linux-stable-4.14-oe',
                   'openembedded-lkft-linux-stable-4.14'
                  ),
            Branch('4.14-rc',
                   'linux-stable-rc-4.14-oe',
                   'openembedded-lkft-linux-stable-rc-4.14'
                  ),
            Branch('4.9',
                   'linux-stable-4.9-oe',
                   'openembedded-lkft-linux-stable-rc-4.9'
                  ),
            Branch('4.9-rc',
                   'linux-stable-rc-4.9-oe',
                   'openembedded-lkft-linux-stable-rc-4.9'
                  ),
            Branch('4.4',
                   'linux-stable-4.4-oe',
                   'openembedded-lkft-linux-stable-rc-4.4',
                  ),
            Branch('4.4-rc',
                   'linux-stable-rc-4.4-oe',
                   'openembedded-lkft-linux-stable-rc-4.4',
                  ),
        ]

    def get_name(self):
        return self.name
    def get_architecture(self):
        return self.architecture
    def get_jenkins_name(self):
        return self.jenkins_name
    def get_branches(self):
        return iter(self.branches)

    def jenkins_badge_url(self, branch):
        return "https://ci.linaro.org/buildStatus/icon?job={}/DISTRO=rpb,MACHINE={},label={}".format(branch.get_jenkins_name(), self.get_jenkins_name(), branch.get_label())

    def jenkins_build_url(self, branch):
        return "https://ci.linaro.org/view/lkft/job/{}/DISTRO=rpb,MACHINE={},label=docker-lkft/".format(branch.get_jenkins_name(), self.get_jenkins_name())

    def squad_badge_url(self):
        return "squad_favicon.png"
    def squad_project_url(self, branch):
        return "https://qa-reports.linaro.org/lkft/{}/".format(branch.get_squad_name())
    def generate_row(self):
        row = {}
        row["Board"] = self.get_name()
        row["Architecture"] = self.get_architecture()
        for branch in self.get_branches():
            row[branch.get_name()] = \
                '<a href="{}"><img src="{}" /></a><br /><a href="{}"><img src="{}" /></a>'.format(
                self.jenkins_build_url(branch),
                self.jenkins_badge_url(branch),
                self.squad_project_url(branch),
                self.squad_badge_url(),
                )
        return row


class BoardHikey(Board):
    def __init__(self):
        super().__init__("hikey", "arm64", "hikey")
    def _init_branches(self):
        default_branches = super(BoardHikey, self)._init_branches()
        branches = []
        # Hikey has its own 4.4 and 4.4-rc branches.
        for branch in default_branches:
            if "4.4" == branch.get_name():
                branches.append(Branch('Hikey 4.4',
                       'linaro-hikey-stable-4.4-oe',
                       'openembedded-lkft-linaro-hikey-stable-4.4',
                       label="docker-stretch-amd64"
                      ))
            elif "4.4-rc" == branch.get_name():
                branches.append(Branch('Hikey 4.4-rc',
                       'linaro-hikey-stable-rc-4.4-oe',
                       'openembedded-lkft-linaro-hikey-stable-rc-4.4',
                       label="docker-stretch-amd64"
                      ))
            else:
                branches.append(branch)
        return branches

class BoardX15(Board):
    def __init__(self):
        super().__init__("x15", "arm", "am57xx-evm")
class BoardJuno(Board):
    def __init__(self):
        super().__init__("juno", "arm64", "juno")
class BoardDell(Board):
    def __init__(self):
        super().__init__("dell", "x86_64", "intel-core2-32")


boards = [
    # pretty name, architecture, jenkins MACHINE name
    BoardHikey(),
    BoardX15(),
    BoardJuno(),
    BoardDell(),
]

table = []
for board in boards:
    table.append(board.generate_row())

#print("""
#---
#layout: page
#title: Builds
#permalink: /builds/
#---
#""")
print(tabulate(table, headers="keys", tablefmt="html"))
