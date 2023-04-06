package com.dh.clinica.service;

import com.dh.clinica.entity.DomicilioDTO;

import java.util.Set;

public interface IDomicilioService {
    void crearDomicilio(DomicilioDTO DomicilioDTO);
    DomicilioDTO leerDomicilio(Long id);
    void modificarDomicilio(DomicilioDTO DomicilioDTO);
    void eliminarDomicilio(Long id);
    Set<DomicilioDTO> getTodos();
}
