package com.dh.clinica.service;

import com.dh.clinica.entity.PacienteDTO;
import java.util.Set;
public interface IPacienteService {
    void crearPaciente(PacienteDTO pacienteDTO);
    PacienteDTO leerPaciente(Long id);
    void modificarPaciente(PacienteDTO pacienteDTO);
    void eliminarPaciente(Long id);
    Set<PacienteDTO> getTodos();
}
