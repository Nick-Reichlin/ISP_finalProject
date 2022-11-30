<html>
    <head>
        <title> Contacting Database through php </title>
        <style>
        td, th, table {border: thin solid black;}
        </style>
    </head>
    <body>
        <?php
            if(isset($_POST['database']))
            {
                $databaseName = $_POST['database'];
            }
            else
            {
                $databaseName = "isp";
            }

            $db = mysqli_connect('localhost:3306', 'root', '',"$databaseName");

            if(isset($_POST['column1']))
            {
                $column1 = $_POST['column1'];
            }
            if(isset($_POST['column2']))
            {
                $column2 = $_POST['column2'];
            }

            if(isset($_POST['column3']))
            {
                $column3 = $_POST['column3'];
            }
            $action = $_POST['action'];

            if ($action == "display")
            {
                $query = "";
            }
            else if ($action == "add")
            {
                $query = "insert into data values($column1, $column2, $column3)";
            }
            else if ($action == "update")
            {
                $query = "update data set column_2 = $column2, column_3 = $column3 where column_1 = $column1"; 
            }
            else if ($action == "delete")
            {
                $query = "delete from data where column_1 = $column1";
            }
            
            if($query != "")
            {
                $rs = mysqli_query($db, $query);
                if(!$rs)
                {
                    print "Error has occurred and command cannot be executed.";
                    $error = mysqli_error();
                    print "<p> $error </p>";
                    exit;
                }
            }
            $query = "select * from data";
            $rs = mysqli_query($db,$query);
            $rowCount = mysqli_num_rows($rs);
            print "<h2 style='text-align: center;'> Display of Data Catalog </h2>";
            print "<table style='margin-left:42.5%; margin-right: 42.5%; width: 15%;'> <tr>";

            $rows = mysqli_fetch_array($rs);
            $num_field = mysqli_num_fields($rs);
            $keys = array_keys($rows);
            for ($i = 0; $i < $num_field; $i++) 
            {
                print "<th>" . $keys[2 * $i + 1] . "</th>";
            }
            print "</tr>";
            for ($row_num = 0; $row_num < $rowCount; ++$row_num) 
            {
                if(is_array($rows))
                {
                    print "<tr>";
                    $data = array_values($rows);
                    for ($i = 0; $i < $num_field; ++$i){
                        $datapt = htmlspecialchars($data[2 * $i + 1]);
                        print "<th>" . $datapt . "</th> ";
                    }
                    print "</tr>";
                }
                $rows = mysqli_fetch_array($rs);
            }
        ?>
    </body>
</html>