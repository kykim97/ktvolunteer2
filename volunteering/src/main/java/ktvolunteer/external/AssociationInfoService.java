
package ktvolunteer.external;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.Date;
import java.util.List;


@FeignClient(name = "수혜기관", url = "${api.url.수혜기관}")
 
public interface AssociationInfoService {
    @GetMapping(path="/associationInfos/{undefined}")
    public AssociationInfo 봉사활동일정조회 (@PathVariable ("")  );

}



