"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";

export default function RugOrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    rugSize: "",
    rugMaterial: "",
    rugColor: "",
    patternOrDesign: "",
    additionalSpecification: "",
    estimatedBudget: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzsqGkJ5tNuHgoR3R-MLLdn584qpm5sBx62Lz-rFBNoNA2-SugujJ6i8XmzjPFqHbaa/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
          mode: "no-cors",
        }
      );

      toast.success("Thank you for your order!");
      setFormData({
        name: "",
        contact: "",
        rugSize: "",
        rugMaterial: "",
        rugColor: "",
        patternOrDesign: "",
        additionalSpecification: "",
        estimatedBudget: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full mx-auto mt-10 p-6 ">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="contact">Contact (Phone or Email)</Label>
            <Input
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div>
          <Label htmlFor="rugSize">Rug Size</Label>
          <Input
            id="rugSize"
            name="rugSize"
            value={formData.rugSize}
            onChange={handleChange}
            placeholder="e.g., 5' x 7', 8' x 10', Custom"
            required
          />
        </div>

        <div>
          <Label htmlFor="rugMaterial">Rug Material</Label>
          <Input
            id="rugMaterial"
            name="rugMaterial"
            value={formData.rugMaterial}
            onChange={handleChange}
            placeholder="e.g., Wool, Silk, Cotton, Synthetic"
            required
          />
        </div>

        <div>
          <Label htmlFor="rugColor">Rug Color</Label>
          <Input
            id="rugColor"
            name="rugColor"
            value={formData.rugColor}
            onChange={handleChange}
            placeholder="e.g., Blue, Red, Multicolor"
            required
          />
        </div>

        <div>
          <Label htmlFor="patternOrDesign">Pattern or Design</Label>
          <Input
            id="patternOrDesign"
            name="patternOrDesign"
            value={formData.patternOrDesign}
            onChange={handleChange}
            placeholder="e.g., Floral, Geometric, Abstract"
            required
          />
        </div>

        <div>
          <Label htmlFor="additionalSpecification">
            Additional Specifications
          </Label>
          <Textarea
            id="additionalSpecification"
            name="additionalSpecification"
            value={formData.additionalSpecification}
            onChange={handleChange}
            placeholder="Any additional details or requirements"
            rows={4}
          />
        </div>

        <div>
          <Label htmlFor="estimatedBudget">Estimated Budget</Label>
          <Input
            id="estimatedBudget"
            name="estimatedBudget"
            type="text"
            value={formData.estimatedBudget}
            onChange={handleChange}
            placeholder="Enter your budget (e.g., $500, $1000-$1500)"
            required
          />
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Rug Order Request"}
        </Button>
      </form>
    </div>
  );
}
