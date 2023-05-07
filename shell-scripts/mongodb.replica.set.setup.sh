rs.initiate({"_id" : "bkf-replica-set", "members" : [{"_id" : 0,"host" : "mongodb1:30000"},{"_id" : 1,"host" : "mongodb2:30001"},{"_id" : 2,"host" : "mongodb3:30002"}]});
conf = rs.config();
conf.members[0].priority = 2;
rs.reconfig(conf);