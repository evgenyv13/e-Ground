package com.bsuir.sdtt.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

/**
 * Class of Controller Advice.
 *
 * @author Stsiapan Balashenka
 * @version 1.0
 */
@ControllerAdvice(annotations = RestController.class)
@Slf4j
public class GlobalExceptionController {
    private static final String ERROR_PREFIX = "ERROR: ";
    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ResponseBody
    private String handleException(Exception exception) {
        return errorBuilderMessage(exception);
    }

    private String errorBuilderMessage(Exception exception) {
        log.error("ERROR: ", exception);

        return ERROR_PREFIX + exception.getMessage();
    }
}
