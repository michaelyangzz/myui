using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System.Threading.Tasks;

namespace myserver
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
                   .AddCookie();
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            var cookiePolicyOptions = new CookiePolicyOptions
            {
                MinimumSameSitePolicy = SameSiteMode.Strict,
            };

            app.UseCookiePolicy(cookiePolicyOptions);




            //app.UseAuthentication();


            //app.Use(async (context, next) =>
            //{
            //    if (context.User.Identity.IsAuthenticated)
            //        await next.Invoke();
            //    else if (context.Request.Path.Value.Contains("login"))
            //    {
            //        await next.Invoke();
            //    }
            //    else
            //        context.Response.StatusCode = 401;
            //});

            app.Use(async (context, next) =>
            {
                await Task.Delay(3000);
                await next.Invoke();
            });


            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(builder => builder.WithOrigins("*").WithHeaders("Content-Type").WithMethods("GET", "PUT", "DELETE", "POST"));

            app.UseMvc();
        }
    }
}
