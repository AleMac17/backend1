package com.dh.clinica.entity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "domicilios")
public class Domicilio {
    @Id
    @SequenceGenerator(name = "domicilio_sequence", allocationSize = 1, sequenceName = "domicilio_sequence")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "domicilio_sequence")
    private Long id;
    private String calle;
    private String numero;
    private String localidad;
    private String provincia;
    /*
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)*/
    @OneToOne(mappedBy = "domicilio")
    @JsonIgnore
    /*@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})*/
    private Paciente paciente;

}