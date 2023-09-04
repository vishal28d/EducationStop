import React from 'react';

import { useHistory } from 'react-router-dom';


const Payment = () => {
//     const history = useHistory();
//   const goBack = () => {
//     history.goBack(); // This function takes you back to the previous page in the browser history.
//   };

  return (
    <div>
      <section style={{ backgroundColor: '#eee' }}>
        <div className="container py-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-4">
              <div className="card rounded-3">
                <div className="card-body mx-1 my-2">
                  <div className="d-flex align-items-center">
                    <div>
                      <i className="fab fa-cc-visa fa-4x text-black pe-3"></i>
                    </div>
                    <div>
                      <p className="d-flex flex-column mb-0">
                        <b>Vishal Maurya</b>
                        <span className="small text-muted">**** 8880</span>
                      </p>
                    </div>
                  </div>

                  <div className="pt-3">
                    <div className="d-flex flex-row pb-3">
                      <div className="rounded border border-primary border-2 d-flex w-100 p-3 align-items-center"
                        style={{ backgroundColor: 'rgba(18, 101, 241, 0.07)' }}>
                        <div className="d-flex align-items-center pe-3">
                          <input className="form-check-input" type="radio" name="radioNoLabelX" id="radioNoLabel11"
                            value="" aria-label="..." checked />
                        </div>
                        <div className="d-flex flex-column">
                          <p className="mb-1 small text-primary">Total amount due</p>
                          <h6 className="mb-0 text-primary">$12000</h6>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex flex-row pb-3">
                      <div className="rounded border d-flex w-100 px-3 py-2 align-items-center">
                        <div className="d-flex align-items-center pe-3">
                          <input className="form-check-input" type="radio" name="radioNoLabelX" id="radioNoLabel22"
                            value="" aria-label="..." />
                        </div>
                        <div className="d-flex flex-column py-1">
                          <p className="mb-1 small text-primary">Other amount</p>
                          <div className="d-flex flex-row align-items-center">
                            <h6 className="mb-0 text-primary pe-1">$</h6>
                            <input type="text" className="form-control form-control-sm" id="numberExample"
                              style={{ width: '55px' }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center pb-1">
                    <a href="#!"  className="text-muted">Go back</a>
                    <button type="button" className="btn btn-primary btn-lg">Pay amount</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Payment;
