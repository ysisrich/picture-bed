
import api_github from './api_service/api_github';
import api_giee from './api_service/api_gitee';
import api_upyun from './api_service/api_upyun';
import api_oss from './api_service/api_oss';


export default{
  ...api_github,
  ...api_giee,
  ...api_upyun,
  ...api_oss,
}
