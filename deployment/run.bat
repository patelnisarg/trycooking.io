echo running: %*
plink -i "key.ppk" ec2-user@3.135.149.40 -m %* -batch