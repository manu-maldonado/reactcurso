export function ProductForm(){

    

    return (
        <form>
        <input
          type="radio"
          name="step"
          id="step1"
          className="msf-radio"
          defaultChecked
        />
        <input type="radio" name="step" id="step2" className="msf-radio" />
        <input type="radio" name="step" id="step3" className="msf-radio" />

        <div className="msf-wrap">
          <div className="msf-progress">
            <span className="msf-step-label">1. Your Info</span>
            <span className="msf-step-label">2. Details</span>
            <span className="msf-step-label">3. Done</span>
          </div>

          <div className="msf-body">
            <div className="msf-panel msf-panel-1">
              <h3>Your Info</h3>


              <input type="text" placeholder="Full name" />
              <input type="email" placeholder="Email address" />
              <div className="msf-actions">
                <label htmlFor="step2" className="msf-btn">
                  Next →
                </label>
              </div>
            </div>

            <div className="msf-panel msf-panel-2">
              <h3>Details</h3>
              <input type="text" placeholder="Company (optional)" />
              <input type="tel" placeholder="Phone number" />
              <div className="msf-actions">
                <label htmlFor="step1" className="msf-btn msf-btn-back">
                  ← Back
                </label>
                <label htmlFor="step3" className="msf-btn">
                  Next →
                </label>
              </div>
            </div>

            <div className="msf-panel msf-panel-3">
              <h3>All done!</h3>
              <p className="msf-success">
                ✓ Form submitted, zero JavaScript used!
              </p>
              <div className="msf-actions">
                <label htmlFor="step1" className="msf-btn">
                  Start Over
                </label>
              </div>
            </div>
          </div>
        </div>
      </form>
    )
}