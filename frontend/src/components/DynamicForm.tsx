---
'use client'
import React, { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'

/**
 * DynamicForm: a base component that accepts a `schema` prop (array of fields)
 * Each field: { name, label, type, options?, required?, dependsOn?: {field, value} }
 * This file is a starting point and demonstrates conditional logic & react-hook-form usage.
 */

export default function DynamicForm({ schema = [], onSubmit }: any){
  const { handleSubmit, control, watch } = useForm()
  const watchAll = watch()

  useEffect(()=>{
    // form analytics hook placeholder
    // e.g. send impressions / field interactions to analytics
  }, [watchAll])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {schema.map((field: any) => {
        // conditional logic
        if(field.dependsOn){
          const { field: depField, value } = field.dependsOn
          if(watch(depField) !== value) return null
        }

        return (
          <div key={field.name}>
            <label className="block mb-1 font-medium">{field.label}</label>
            <Controller
              name={field.name}
              control={control}
              defaultValue=""
              rules={{ required: !!field.required }}
              render={({ field: ctrl }) => (
                field.type === 'select' ? (
                  <select {...ctrl} className="border p-2 rounded w-full">
                    <option value="">Select</option>
                    {field.options?.map((o: any)=> <option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                ) : (
                  <input {...ctrl} type={field.type} className="border p-2 rounded w-full" />
                )
              )}
            />
          </div>
        )
      })}

      <div className="flex gap-3">
        <button type="submit" className="px-4 py-2 bg-black text-gold rounded">Submit</button>
        <button type="button" className="px-4 py-2 border rounded">Save Draft</button>
      </div>
    </form>
  )
}

---
