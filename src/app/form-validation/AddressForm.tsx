"use client";

import { useActionState } from "react";
import { submitForm } from "./submitForm";
import type { FormState } from "./submitForm";

const initialState: FormState = {
  success: false,
  errors: {},
  formInput: {},
};

const AddressForm = () => {
  const [state, formAction, isPending] = useActionState(
    submitForm,
    initialState,
  );

  return (
    <form
      action={formAction}
      className="bg-gray-950 self-center rounded-2xl p-8 flex flex-col gap-4"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="streedAddress">Street Address</label>
        <div>
          <input
            id="streetAddress"
            name="streetAddress"
            type="text"
            className={`border-2 rounded-xl px-4 py-2 w-full ${state.errors.streetAddress ? "border-red-500" : "border-borders"}`}
            placeholder="123 Main St"
            defaultValue={state.formInput?.streetAddress}
          />
          {state.errors.streetAddress && (
            <small className="text-red-500">{state.errors.streetAddress}</small>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="apartment">Apartment/Suite (Optional)</label>
        <input
          id="apartment"
          name="apartment"
          type="text"
          className="border-2 border-borders rounded-xl px-4 py-2"
          placeholder="Apt 4B"
          defaultValue={state.formInput?.apartment}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="city">City</label>
          <div>
            <input
              id="city"
              name="city"
              type="text"
              className={`border-2 rounded-xl px-4 py-2 w-full ${state.errors.city ? "border-red-500" : "border-borders"}`}
              placeholder="Victoria Island"
              defaultValue={state.formInput?.city}
            />
            {state.errors.city && (
              <small className="text-red-500">{state.errors.city}</small>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="state">State</label>
          <div>
            <input
              id="state"
              name="state"
              type="text"
              className={`border-2 rounded-xl px-4 py-2 w-full ${state.errors.state ? "border-red-500" : "border-borders"}`}
              placeholder="Lagos"
              defaultValue={state.formInput?.state}
            />
            {state.errors.state && (
              <small className="text-red-500">{state.errors.state}</small>
            )}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="zipCode">ZIP Code</label>
          <div>
            <input
              id="zipCode"
              name="zipCode"
              type="number"
              minLength={5}
              className={`border-2 rounded-xl px-4 py-2 w-full ${state.errors.zipCode ? "border-red-500" : "border-borders"}`}
              placeholder="100172"
              defaultValue={state.formInput?.zipCode}
            />
            {state.errors.zipCode && (
              <small className="text-red-500">{state.errors.zipCode}</small>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="country">Country</label>
          <div>
            <input
              id="country"
              name="country"
              type="text"
              className={`border-2 rounded-xl px-4 py-2 w-full ${state.errors.country ? "border-red-500" : "border-borders"}`}
              placeholder="Nigeria"
              defaultValue={state.formInput?.country}
            />
            {state.errors.country && (
              <small className="text-red-500">{state.errors.country}</small>
            )}
          </div>
        </div>
      </div>

      <button
        type="submit"
        className={`py-4 rounded-2xl cursor-pointer hover:scale-105 transition-transform duration-500 ${isPending ? "bg-raised-surface" : "bg-blue-600"}`}
        disabled={isPending}
      >
        {isPending ? "Submitting" : "Submit"}
      </button>

      {state.success && (
        <p className="text-green-500 font-bold text-center">
          Address Added Successfully...
        </p>
      )}
    </form>
  );
};

export default AddressForm;
