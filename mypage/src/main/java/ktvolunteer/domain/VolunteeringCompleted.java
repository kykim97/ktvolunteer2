package ktvolunteer.domain;

import java.time.LocalDate;
import java.util.*;
import ktvolunteer.infra.AbstractEvent;
import lombok.Data;

@Data
public class VolunteeringCompleted extends AbstractEvent {

    private Long volunteeringId;
    private Address place;
    private Date schedule;
    private String title;
    private String category;
    private Integer personnel;
}
