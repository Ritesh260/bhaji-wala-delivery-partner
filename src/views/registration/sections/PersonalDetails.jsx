
"use client";

const inputClass =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100 placeholder:text-gray-400";

const labelClass = "mb-2 block text-sm font-semibold text-gray-700";

// Field component - PersonalDetails ke bahar
function Field({
  label,
  name,
  form,
  updateField,
  type = "text",
  placeholder,
  required = true,
}) {
  return (
    <div>
      <label className={labelClass} htmlFor={name}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={form[name] ?? ""}
        onChange={updateField}
        placeholder={placeholder}
        required={required}
        className={inputClass}
      />
    </div>
  );
}

export default function PersonalDetails({
  form,
  updateField,
  showPassword,
  setShowPassword,
}) {
  return (
    <div>
      <h2 className="mb-5 text-lg font-bold text-gray-900">
        Personal Information
      </h2>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <Field
            label="Full Name"
            name="fullName"
            form={form}
            updateField={updateField}
            placeholder="Enter your full name"
          />
        </div>

        <Field
          label="Mobile Number"
          name="mobile"
          type="tel"
          form={form}
          updateField={updateField}
          placeholder="10-digit mobile number"
        />

        <Field
          label="Email Address"
          name="email"
          type="email"
          form={form}
          updateField={updateField}
          placeholder="example@gmail.com"
        />

        <Field
          label="Date of Birth"
          name="dateOfBirth"
          type="date"
          form={form}
          updateField={updateField}
          required={false}
        />

        <div>
          <label className={labelClass}>Gender</label>
          <select
            name="gender"
            value={form.gender ?? ""}
            onChange={updateField}
            className={inputClass}
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <Field
            label="Full Address"
            name="address"
            form={form}
            updateField={updateField}
            placeholder="House no., street, area"
            required={false}
          />
        </div>

        <Field
          label="City"
          name="city"
          form={form}
          updateField={updateField}
          placeholder="Enter city"
          required={false}
        />

        <Field
          label="Pincode"
          name="pincode"
          form={form}
          updateField={updateField}
          placeholder="Enter pincode"
          required={false}
        />

        <div>
          <label className={labelClass}>
            Password <span className="text-red-500">*</span>
          </label>

          <input
            name="password"
            type={showPassword ? "text" : "password"}
            value={form.password ?? ""}
            onChange={updateField}
            placeholder="Minimum 8 characters"
            className={inputClass}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="mt-2 text-xs font-semibold text-green-700"
          >
            {showPassword ? "Hide password" : "Show password"}
          </button>
        </div>

        <Field
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          form={form}
          updateField={updateField}
          placeholder="Re-enter password"
        />
      </div>
    </div>
  );
}
