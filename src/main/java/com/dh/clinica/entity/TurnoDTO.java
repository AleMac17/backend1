package com.dh.clinica.entity;


import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class TurnoDTO {
    private Long id;
    private Odontologo odontologo;
    private Paciente paciente;
    private Date fechaTurno;
}
