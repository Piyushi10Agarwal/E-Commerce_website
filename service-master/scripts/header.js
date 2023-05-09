const header = document.getElementById('header');
header.innerHTML = `<!-- Navigation bar --> <!-- Location fixed--> <!-- Dropdown menu on services -->
        <nav class="navbar navbar-expand-sm navbar-light" id="nav">
            <a class="navbar-brand px-3" href="#">
                <img src="../img/icon.png" alt="" loading="lazy">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-label="Toggle navigation" aria-expanded="false"><span class="navbar-toggler-icon"></span></button>
                    
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <nav class="navbar-nav mr-auto">
                    <a class="nav-link h5 active font-weight-bold text-white px-3" href="../index.html">Home</a>
                    <div class="dropdown">
                        <a class="nav-link h5 font-weight-bold px-3 text-white dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">
                            Services
                        </a> 
                        
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item h6 py-2 hover-effect" href="./plumber.html">Plumber</a>
                            <a class="dropdown-item h6 py-2 hover-effect" href="./carpentor.html">Carpentor</a>
                            <a class="dropdown-item h6 py-2 hover-effect" href="./electrical-services.html">Electrical Services</a>
                            <a class="dropdown-item h6 py-2 hover-effect" href="./ac-repairs.html">AC Repair</a>
                        </div>
                    </div>
                </nav>
                <nav class="navbar-nav ml-auto">
                    <a class="nav-link h5 font-weight-bold px-3 text-white" href="./login.html" id="logged">Log In</a>
                    <a class="nav-link h5 font-weight-bold px-3 text-white" href="./sign-up.html" id="logged">Sign Up</a>
                    <a class="nav-link h5 font-weight-bold px-3 text-white" href="/logout" id="out">LogOut</a>
                    <a class="nav-link h5 font-weight-bold px-3 text-white" href="./mycart.html" id="out">My Cart</a>
                </nav>
            </div>
        </nav> <!-- navigation-bar -->`;

const footer = document.getElementById('footer');
footer.innerHTML = `<nav class="nav mr-auto justify-content-center">
                    <a class="nav-link font-weight-lighter text-white" href="./about.html">About Us</a>
                    <a class="nav-link font-weight-lighter text-white" href="/reviews">Reviews</a>
                </nav>
            <hr style="width: 300px; margin: 10px auto; border-color: red;">
                
                <nav class="mr-auto d-flex justify-content-center">
                <p class="font-weight-normal text-white">Copyright © Brand 2023</p>
            </nav>`;

