import React, { useContext } from 'react'
import Navbar from './Navbar';
import { createContext } from 'react';

const SignIn = () => {

	// const contextForSignIn = createContext();
 
  return (
    <>

	{/* <Routes>
        <Route path="/sign-in" element={<SignIn />}></Route>
      </Routes> */}

		

    <div id='signInContainer' class="container h-100">
    		<div class="row h-100">
				<div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
					<div class="d-table-cell align-middle">

						<div class="text-center mt-4">
							<h1 class="h2">Get started</h1>
							<p class="lead">
							"Unlocking Knowledge, Unleashing Success."
							Sc/ST 50% discount
							</p>
						</div>

						<div class="card">
							<div class="card-body">
								<div class="m-sm-4">
									<form>
										<div class="form-group">
											<label>Name</label>
											<input class="form-control form-control-lg" type="text" name="name" placeholder="Enter your name" />
										</div>
										<div class="form-group">
											<label>Caste/Category</label>
											<input class="form-control form-control-lg" type="text" name="company" placeholder="Enter your category name" />
										</div>
										<div class="form-group">
											<label>Email</label>
											<input class="form-control form-control-lg" type="email" name="email" placeholder="Enter your email" />
										</div>
										<div class="form-group">
											<label>Password</label>
											<input class="form-control form-control-lg" type="password" name="password" placeholder="Enter password" />
										</div>
										<div class="text-center mt-3">
											<a href="index.html" class="btn btn-lg btn-primary">Sign up</a>
										
										</div>
									</form>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
     

    <h1>Helloooooooo baccho </h1>
    </>
  )
}

export default SignIn ;