

namespace API.Extensions
{
    public static class DateTimeExtensions
    {
        public static int CalculateAge(this DateOnly dob){

            var tody = DateOnly.FromDateTime(DateTime.UtcNow);
            var age = tody.Year - dob.Year;
            if(dob > tody.AddYears(-age)) age--;
            return age;
        }
    }
}