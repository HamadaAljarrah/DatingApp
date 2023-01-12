

using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController] // gives powers, DTOs level validations, no need to specify [BodyForm]
    [Route("api/[controller]")] // api/users
    public class BaseApiController  : ControllerBase
    {
        
    }
}