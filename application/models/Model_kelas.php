<?php
    class Model_kelas extends CI_Model{
        function data_kelas($id = ""){
            if($id != "")
                $query = $this->db->get_where("kelas", array("id_kelas"=> $id));
            else
                $query = $this->db->get("kelas");

            return $query;
        }

    }