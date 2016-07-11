<?php

namespace sqlfunctions;

class sqlfunctions
{
    function update()
    {

    }

    function insert($datas)
    {
        $insert = 'INSERT INTO user (';


        foreach($datas as $key => $value)
        {
            $insert .= $key . ',';
        }

        $insert = substr($insert, 0, -1);

        $insert .= ')';

        $insert .= 'VALUES (';

        foreach($datas as $key => $value)
        {
            $insert .= "'$value'" . ',';
        }

        $insert = substr($insert, 0, -1);

        $insert .= ')';

        echo('test');
    }
}