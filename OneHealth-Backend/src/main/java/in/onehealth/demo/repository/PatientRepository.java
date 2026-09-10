package in.onehealth.demo.repository;

import in.onehealth.demo.entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PatientRepository extends JpaRepository <Patient, Long>{
    Optional<Patient> findFirstByOrderByIdAsc();
}
