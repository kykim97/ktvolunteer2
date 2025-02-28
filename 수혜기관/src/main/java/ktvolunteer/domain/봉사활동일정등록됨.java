package ktvolunteer.domain;

import java.time.LocalDate;
import java.util.*;
import ktvolunteer.domain.*;
import ktvolunteer.infra.AbstractEvent;
import lombok.*;

//<<< DDD / Domain Event
@Data
@ToString
public class 봉사활동일정등록됨 extends AbstractEvent {

    private Long associationId;
    private Address place;
    private Date schedule;
    private String title;
    private String category;

    public 봉사활동일정등록됨(AssociationInfo aggregate) {
        super(aggregate);
    }

    public 봉사활동일정등록됨() {
        super();
    }
}
//>>> DDD / Domain Event
