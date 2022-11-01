start=$(date +%s)

$HOME/Code/db-plop/scripts/shell/init-express.sh $1
cd $1
$HOME/Code/db-plop/scripts/shell/init-prisma.sh
$HOME/Code/db-plop/scripts/shell/init-prisma-auth.sh

end=$(date +%s)
echo "Elapsed Time: $(($end-$start)) seconds"
