item = "PAPER"
recycleSet = {"plastic bottle", "paper"}
compostSet = {"banana"}
item = item.lower()
if (item in recycleSet):
    print("RECYCLE")
else:
    print("TRASH")