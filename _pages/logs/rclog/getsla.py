#!/usr/bin/env python3

SLA = {
    '>48': 0,
    '<48': 0,
    '<24': 0,
    '<8': 0,
}
with open('index.md') as f:
    for line in f.readlines():
        if ' sla ' in line:
            (_, _, hour, count, _) = line.split(' ')
            SLA[str(hour)] += int(count)

total = sum(SLA.values())
print("Total RCs: {}".format(total))
for sla, count in SLA.items():
    print("  SLA {}: {}".format(sla, count))
total_met = SLA['<48'] + SLA['<24'] + SLA['<8']
print("SLA met {:.1f}% of the time".format(100*total_met/total))
