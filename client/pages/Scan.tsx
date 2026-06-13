import React, { useState, useRef } from "react";
import { PhoneFrame } from "@/components/layout/PhoneFrame";
import { Camera, Upload, RefreshCw } from "lucide-react";

export default function Scan() {
  const [stage, setStage] = useState<
    "main" | "camera" | "preview" | "result"
  >("main");
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
        audio: false,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setStage("camera");
      }
    } catch (err) {
      alert("Camera access denied. Please allow camera permissions.");
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      if (context) {
        canvasRef.current.width = videoRef.current.videoWidth;
        canvasRef.current.height = videoRef.current.videoHeight;
        context.drawImage(videoRef.current, 0, 0);
        setCapturedImage(canvasRef.current.toDataURL("image/jpeg", 0.85));
        stopCamera();
        setStage("preview");
      }
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach((track) => track.stop());
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCapturedImage(event.target?.result as string);
        setStage("preview");
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const analyzeImage = async () => {
    setAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      setAnalyzing(false);
      setStage("result");
    }, 2000);
  };

  const resetScan = () => {
    setCapturedImage(null);
    setStage("main");
  };

  return (
    <PhoneFrame>
      {stage === "main" && (
        <>
          {/* Header */}
          <div className="bg-gradient-to-br from-forest via-forest-100 to-forest-200 px-5 py-8 text-center relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage:
                  "radial-gradient(circle, currentColor 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
            <h2 className="font-display text-2xl font-bold text-white mb-1.5 relative z-10 flex items-center justify-center gap-2">
              <span>🔍</span> Scan & Identify
            </h2>
            <p className="text-sm text-white/65 font-medium relative z-10">
              Camera AI — point at any crop, leaf, pest, or soil
            </p>
          </div>

          {/* Action Buttons */}
          <div className="px-4 -mt-6 relative z-10 mb-4 grid grid-cols-2 gap-3">
            <button
              onClick={openCamera}
              className="bg-white rounded-2xl p-5 flex flex-col items-center gap-2 shadow-lg hover:shadow-xl transition-shadow active:scale-95"
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-leaf to-forest-200 flex items-center justify-center text-white">
                <Camera size={28} />
              </div>
              <h3 className="font-display text-sm font-bold text-gray-700">
                Live Camera
              </h3>
              <p className="text-xs text-gray-400 text-center font-medium">
                Point & scan instantly
              </p>
            </button>

            <button
              onClick={() => fileInputRef.current?.click()}
              className="bg-white rounded-2xl p-5 flex flex-col items-center gap-2 shadow-lg hover:shadow-xl transition-shadow active:scale-95"
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-sky to-sky-light flex items-center justify-center text-white">
                <Upload size={28} />
              </div>
              <h3 className="font-display text-sm font-bold text-gray-700">
                Upload Photo
              </h3>
              <p className="text-xs text-gray-400 text-center font-medium">
                From your gallery
              </p>
            </button>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />

          {/* Features */}
          <div className="px-4 mt-8 mb-4">
            <div className="font-display text-base font-bold text-gray-700 mb-3">
              What can I scan?
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Feature icon="🍃" title="Diseased Leaves" desc="Blight, rust, spots, wilting" />
              <Feature
                icon="🐛"
                title="Pests & Insects"
                desc="Identify bugs, larvae, eggs"
              />
              <Feature
                icon="🌱"
                title="Weeds & Plants"
                desc="Identify unknown plants"
              />
              <Feature
                icon="🪨"
                title="Soil Assessment"
                desc="Soil color, texture, compaction"
              />
            </div>
          </div>
        </>
      )}

      {stage === "camera" && (
        <div className="flex flex-col h-full">
          <div className="flex-1 relative bg-gray-900 flex items-center justify-center">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover"
            />
            <canvas ref={canvasRef} className="hidden" />

            {/* Scan Frame Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-44 h-44 relative">
                {/* Corners */}
                <div className="absolute top-0 left-0 w-7 h-7 border-t-4 border-l-4 border-leaf-light rounded-tl" />
                <div className="absolute top-0 right-0 w-7 h-7 border-t-4 border-r-4 border-leaf-light rounded-tr" />
                <div className="absolute bottom-0 left-0 w-7 h-7 border-b-4 border-l-4 border-leaf-light rounded-bl" />
                <div className="absolute bottom-0 right-0 w-7 h-7 border-b-4 border-r-4 border-leaf-light rounded-br" />

                {/* Scanning line */}
                <div className="absolute left-1 right-1 h-0.5 bg-gradient-to-r from-transparent via-leaf-light to-transparent animate-scanAnim" />
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex gap-3 p-3 bg-white">
            <button
              onClick={capturePhoto}
              className="flex-1 bg-gradient-to-br from-leaf to-forest-200 text-white rounded-lg py-3.5 font-bold text-sm flex items-center justify-center gap-2 hover:shadow-lg transition-shadow active:scale-95"
            >
              <Camera size={18} /> Capture
            </button>
            <button
              onClick={() => {
                stopCamera();
                setStage("main");
              }}
              className="bg-gray-100 text-gray-600 rounded-lg px-5 py-3.5 font-bold text-sm hover:bg-gray-200 transition-colors active:scale-95"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {stage === "preview" && capturedImage && (
        <div className="flex flex-col h-full">
          <div className="relative bg-gray-900 flex-1">
            <img
              src={capturedImage}
              alt="Captured"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex gap-3 p-3 bg-white">
            <button
              onClick={analyzeImage}
              disabled={analyzing}
              className="flex-1 bg-gradient-to-br from-leaf to-forest-200 text-white rounded-lg py-3.5 font-bold text-sm flex items-center justify-center gap-2 hover:shadow-lg transition-shadow active:scale-95 disabled:opacity-75"
            >
              {analyzing ? (
                <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>🤖</>
              )}
              Analyze with AI
            </button>
            <button
              onClick={resetScan}
              className="bg-gray-100 text-gray-600 rounded-lg px-5 py-3.5 font-bold text-sm hover:bg-gray-200 transition-colors active:scale-95"
            >
              <RefreshCw size={18} />
            </button>
          </div>
        </div>
      )}

      {stage === "result" && (
        <div className="px-4 py-4">
          {/* Result Hero */}
          <div className="bg-gradient-to-br from-forest to-forest-200 rounded-2xl p-5 flex items-start gap-4 mb-4">
            <div className="text-5xl flex-shrink-0">🌿</div>
            <div>
              <h3 className="font-display text-lg font-bold text-white mb-1">
                Healthy Leaf
              </h3>
              <p className="text-sm text-white/70">
                Confidence: <span className="font-bold">High</span>
              </p>
            </div>
          </div>

          {/* Result Details */}
          <div className="bg-white rounded-2xl p-4 shadow-md mb-4">
            <div className="space-y-4">
              <ResultSection
                label="Severity"
                content={
                  <span className="inline-flex items-center gap-1 bg-leaf-glow text-forest-200 text-xs font-bold px-3 py-1 rounded-full">
                    ⚡ None
                  </span>
                }
              />
              <ResultSection
                label="Diagnosis"
                content="The crop appears healthy with no visible signs of disease, pest damage, or nutritional deficiency."
              />
              <ResultSection
                label="Treatment"
                content="Continue regular monitoring and maintain current irrigation and nutrient schedule."
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mb-4">
            <button
              onClick={resetScan}
              className="flex-1 bg-gradient-to-br from-leaf to-forest-200 text-white rounded-lg py-3 font-bold text-sm hover:shadow-lg transition-shadow active:scale-95"
            >
              Scan Again
            </button>
          </div>
        </div>
      )}
    </PhoneFrame>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="text-2xl mb-2">{icon}</div>
      <h4 className="text-sm font-bold text-gray-700 mb-1">{title}</h4>
      <p className="text-xs text-gray-400 font-medium leading-tight">{desc}</p>
    </div>
  );
}

function ResultSection({
  label,
  content,
}: {
  label: string;
  content: React.ReactNode;
}) {
  return (
    <div>
      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
        {label}
      </div>
      <div className="text-sm text-gray-600 font-medium leading-relaxed">
        {content}
      </div>
    </div>
  );
}
