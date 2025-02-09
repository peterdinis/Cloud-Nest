import { FC } from "react";
import { Shield, Share2, Users } from "lucide-react";

const Features: FC = () => {
    return (
        <div className="py-20" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-blue-500/20 transition-all hover:bg-white/10 hover:scale-105">
              <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Secure Storage</h3>
              <p className="text-blue-200">Your files are encrypted and stored safely in the cloud.</p>
            </div>
            <div className="text-center p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-blue-500/20 transition-all hover:bg-white/10 hover:scale-105">
              <Share2 className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Easy Sharing</h3>
              <p className="text-blue-200">Share files and folders with anyone, anywhere.</p>
            </div>
            <div className="text-center p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-blue-500/20 transition-all hover:bg-white/10 hover:scale-105">
              <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Collaboration</h3>
              <p className="text-blue-200">Work together with your team in real-time.</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Features