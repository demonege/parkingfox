<?php

namespace sqlfunctions;

class sqlfunctions
{
    private function connect()
    {
        $db = new \mysqli("localhost", "root", "", "parkingfox");
        if($db->connect_errno)
        {
            echo 'Verbindung fehlgeschlagen bitte versuchen sie es später nocheinmal';
        }

        return $db;
    }

    public function update()
    {

    }

    public function select($table,$where=null,$colums='*')
    {
        $db = $this->connect();

        if(!is_string($colums))
        {
            $column = '';
            foreach($colums as $key => $value)
            {
                $column .= $key . ',';
            }
            $column = substr($column, 0, -1);
        }
        else
        {
            $column = $colums;
        }

        $query = 'SELECT ' . $column . ' FROM ' . $table;


        if($where != null)
        {
            $whereStament = $this->where($where);
            $query = $query . $whereStament;
        }

        $result = $db->query($query);

        return mysqli_fetch_row($result);
    }

    public function insert($datas,$table)
    {
        $db = $this->connect();
        $column = '';
        $values = '';

        foreach($datas as $key => $value)
        {
            $column .= $key . ',';
            $values .= "'$value'" . ',';
        }

        $column = substr($column, 0, -1);
        $values = substr($values, 0, -1);

        $query = 'INSERT INTO ' . $table .'('. $column .') VALUES ('.$values.')';

        //myreal escapre string weiter untersuchen
        $result = $db->query($query);
        return $result;
    }

    //funktion auf mehrer möglichkeiten erweitern < > != LIKE etc
    public function where($param)
    {
        $where = ' WHERE ';
        foreach($param as $key => $value)
        {
            $where .= $key . '=' . "'$value'" . ' AND ';
        }
        $where = substr($where, 0, -5);

        return $where;
    }

    function generateRandomString() {
        return openssl_random_pseudo_bytes(8);
    }
}