package in.onehealth.demo.repository;

import in.onehealth.demo.entity.Report;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReportRepository extends JpaRepository<Report,Long> {
}
