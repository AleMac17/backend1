package com.dh.clinica.entity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "turnos")
public class Turno {
        @Id
        @SequenceGenerator(name = "turno_sequence", allocationSize = 1, sequenceName = "turno_sequence")
        @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "turno_sequence")
        private Long id;
        @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
        @JoinColumn(name = "odontologo_id")
        @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
        private Odontologo odontologo;
        private Date fechaTurno;
        @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
        @JoinColumn(name = "paciente_id")
        @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
        private Paciente paciente;

}
/*@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})*/