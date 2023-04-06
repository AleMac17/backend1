package com.dh.clinica.service;

import com.dh.clinica.entity.TurnoDTO;

import java.util.Set;

public interface ITurnoService {
    void crearTurno(TurnoDTO TurnoDTO);
    TurnoDTO leerTurno(Long id);
    void modificarTurno(TurnoDTO TurnoDTO);
    void eliminarTurno(Long id);
    Set<TurnoDTO> getTodos();
}
