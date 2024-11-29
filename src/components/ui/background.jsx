/**
 * @fileoverview Background Component with Modern Effects
 * @author Flore (with guidance from Marco)
 * 
 * Hey Flore! This is the beautiful background component we created.
 * Remember how excited you were when we got the gradient just right?
 * 
 * Key features:
 * 1. Mesh grid pattern
 * 2. Gradient overlays
 * 3. Blur effects
 * 4. Dark mode support
 */

"use client"

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-background">
      {/* Mesh grid pattern
       * Flore, remember how we discussed making it subtle?
       * The opacity in #4f4f4f2e makes it just right!
       */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      {/* Gradient background
       * This creates those beautiful color transitions you wanted
       * The blur-[106px] makes it soft and modern
       */}
      <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
        <div className="blur-[106px] h-56 bg-gradient-to-br from-red-500 to-red-400 dark:from-red-700" />
        <div className="blur-[106px] h-32 bg-gradient-to-r from-red-400 to-red-300 dark:to-red-600" />
      </div>

      {/* Radial gradient mask
       * This creates that professional fade-out effect you liked
       * Perfect for making content more readable!
       */}
      <div className="absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:opacity-70" />
      
      {/* Content container with special gradient
       * The 125% sizing creates that expansive feel we wanted
       * Dark mode gets a different gradient for perfect contrast
       */}
      <div className="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] opacity-30" />
    </div>
  )
}
