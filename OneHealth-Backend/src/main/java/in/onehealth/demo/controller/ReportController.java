package in.onehealth.demo.controller;


import in.onehealth.demo.entity.Report;
import in.onehealth.demo.service.ReportService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/reports")
public class ReportController {

    private final ReportService reportService;

    public ReportController(ReportService reportService) {
        this.reportService = reportService;
    }

    @PostMapping("/upload")
    public Report uploadReport(@RequestParam("file") MultipartFile file) throws IOException {

        return reportService.uploadReport(file);
    }
}
