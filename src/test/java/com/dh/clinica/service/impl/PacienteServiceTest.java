package com.dh.clinica.service.impl;

import com.dh.clinica.entity.PacienteDTO;
import com.dh.clinica.service.IPacienteService;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class PacienteServiceTest {

    @Autowired
    private IPacienteService pacienteService;
    @Test
    public void testCrearPaciente(){
        PacienteDTO pacienteDTO = new PacienteDTO();
        pacienteDTO.setNombre("Ale");
        pacienteDTO.setApellido("Mac");
        pacienteService.crearPaciente(pacienteDTO);
        PacienteDTO pacienteAle = pacienteService.leerPaciente(1L);

        assertTrue(pacienteAle !=null);

    }

}