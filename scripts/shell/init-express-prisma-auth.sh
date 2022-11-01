start=$(date +%s)

./init.sh $1
cd $1
../init-prisma.sh
../init-prisma-auth.sh

end=$(date +%s)
echo "Elapsed Time: $(($end-$start)) seconds"
