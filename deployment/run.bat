echo running: %*
plink -i "key.ppk" ec2-user@ec2-3-133-96-126.us-east-2.compute.amazonaws.com -m %* -batch