package in.onehealth.demo.service;

import in.onehealth.demo.entity.Patient;
import in.onehealth.demo.entity.Report;
import in.onehealth.demo.repository.PatientRepository;
import in.onehealth.demo.repository.ReportRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.util.UUID;

@Service
public class ReportService {
    private final PatientRepository patientRepository;
    private final ReportRepository reportRepository;

    public ReportService(PatientRepository patientRepository,
                         ReportRepository reportRepository) {
        this.patientRepository = patientRepository;
        this.reportRepository = reportRepository;
    }

    private Patient createPatient() {

        return patientRepository.findFirstByOrderByIdAsc()
                .orElseGet(() -> {
                    Patient patient = new Patient();
                    patient.setPatientId(generatePatientId());
                    patient.setCreatedAt(LocalDateTime.now());

                    return patientRepository.save(patient);
                });
    }

    private Report createReport(Patient patient, String fileName, String fileType) {
        Report report = new Report();

        report.setPatient(patient);
        report.setFileName(fileName);
        report.setFileType(fileType);
        report.setUploadedAt(LocalDateTime.now());

        return reportRepository.save(report);
    }

    public Report uploadReport(MultipartFile file) throws IOException {
        Path uploadPath = Paths.get("uploads");

        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        Path filePath = uploadPath.resolve(file.getOriginalFilename());

        Files.copy(
                file.getInputStream(),
                filePath,
                java.nio.file.StandardCopyOption.REPLACE_EXISTING
        );

        Patient patient = createPatient();

        return createReport(
                patient,
                file.getOriginalFilename(),
                file.getContentType()
        );
    }

    private String generatePatientId() {
        return "OH-" + UUID.randomUUID()
                .toString()
                .substring(0, 8)
                .toUpperCase();
    }

}
