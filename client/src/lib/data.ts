export interface Project {
  id: string;
  title: string;
  domain: 'CV' | 'ML' | 'Security' | 'Research' | 'Healthcare';
  shortDescription: string;
  problemStatement: string;
  techStack: string[];
  architecture: string;
  results: string;
  githubUrl?: string;
  videoUrl?: string;
  themeColor: string;
}

export interface Research {
  id: string;
  title: string;
  abstract: string;
  motivation: string;
  methodology: string;
  results: string;
  status: 'Paper Accepted' | 'Under Review' | 'Patent Published' | 'Patent Pending';
  patentNumber?: string;
  pdfUrl?: string;
  type: 'paper' | 'patent';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Tutorial' | 'Research' | 'Demo' | 'Opinion';
  publishedAt: string;
  videoUrl?: string;
}

export interface Resume {
  id: string;
  title: string;
  role: string;
  description: string;
  downloadUrl: string;
}

export const projects: Project[] = [
  {
    id: 'adas-deep-learning',
    title: 'AI-Powered Visibility Enhancement & Threat Scoring System for Vehicles',
    domain: 'CV',
    shortDescription: 'Advanced Driver Assistance System leveraging deep neural networks for real-time image enhancement, object detecting and threat scoring.',
    problemStatement: 'Modern vehicles require intelligent systems that can perceive their environment in real-time to prevent accidents and assist drivers. Traditional computer vision methods struggle with varying lighting conditions and complex scenarios.',
    techStack: ['Python', 'TensorFlow', 'YOLO', 'OpenCV', 'CUDA', 'ROS'],
    architecture: 'Multi-stage pipeline combining deep learning based image enhancement pipeline, YOLOv5 for object detection, semantic segmentation for lane detection, and a sensor fusion module integrating LiDAR and camera data. The system runs at 30 FPS on NVIDIA Jetson.',
    results: '98.2% object detection accuracy, 15ms average inference time, successfully deployed in test vehicles with zero false positives in 1000+ hours of testing.',
    githubUrl: 'https://github.com/naimish/adas-dl',
    videoUrl: 'https://youtube.com/watch?v=demo',
    themeColor: '217 91% 60%'
  },
  {
    id: 'aerial-threat-detection',
    title: 'Aerial Threat Detection and Crowd Dispersion',
    domain: 'Security',
    shortDescription: 'AI-powered surveillance system for detecting aerial threats and managing crowd dynamics using drone footage.',
    problemStatement: 'Public safety organizations need real-time threat detection capabilities for large gatherings and sensitive areas. Manual monitoring is prone to human error and cannot scale.',
    techStack: ['Python', 'PyTorch', 'Faster R-CNN', 'DeepSORT', 'Flask', 'PostgreSQL'],
    architecture: 'Hierarchical detection system with UAV classification at the top level, followed by threat assessment and crowd density mapping. Uses temporal analysis for trajectory prediction.',
    results: '96.7% threat detection rate, 2-second average response time, successfully integrated with city emergency response systems.',
    githubUrl: 'https://github.com/naimish/aerial-threat',
    videoUrl: 'https://youtube.com/watch?v=demo1',
    themeColor: '0 84% 60%'
  },
  {
    id: 'jewellery-try-on',
    title: 'Computer Vision Based Jewellery Try-On Application',
    domain: 'CV',
    shortDescription: 'AR-powered virtual try-on solution enabling customers to visualize jewelry pieces in real-time.',
    problemStatement: 'E-commerce jewelry retailers face high return rates due to customers inability to visualize products. Physical try-ons are time-consuming and limit inventory exposure.',
    techStack: ['Python', 'MediaPipe', 'TensorFlow Lite', 'React Native', 'WebGL', 'Three.js'],
    architecture: 'Face mesh detection for accurate ear/neck tracking, 3D jewelry rendering with realistic lighting, and style transfer for matching skin tones. Mobile-first architecture with on-device inference.',
    results: '40% reduction in return rates, 3x increase in customer engagement, sub-100ms tracking latency on mobile devices.',
    githubUrl: 'https://github.com/naimish/jewel-tryon',
    videoUrl: 'https://youtube.com/watch?v=demo2',
    themeColor: '38 92% 50%'
  },
  {
    id: 'cryptanalysis-ml',
    title: 'Cryptanalysis using Machine Learning',
    domain: 'Security',
    shortDescription: 'Novel approach to cryptographic analysis using deep learning for pattern recognition in encrypted data.',
    problemStatement: 'Traditional cryptanalysis methods are computationally expensive and often impractical for modern encryption schemes. Machine learning offers potential for identifying patterns human analysts might miss.',
    techStack: ['Python', 'PyTorch', 'Transformers', 'NumPy', 'Cython', 'MPI'],
    architecture: 'Attention-based neural network trained on cipher-plaintext pairs, with custom tokenization for binary data. Distributed training across GPU clusters.',
    results: 'Successfully identified weaknesses in reduced-round versions of classical ciphers, published findings in peer-reviewed security conference.',
    githubUrl: 'https://github.com/naimish/crypto-ml',
    videoUrl: 'https://youtube.com/watch?v=demo3',
    themeColor: '262 83% 58%'
  },
  {
    id: 'edna-taxonomy',
    title: 'eDNA Analysis for Taxonomy Prediction',
    domain: 'Research',
    shortDescription: 'Bioinformatics pipeline using ML to identify species from environmental DNA samples.',
    problemStatement: 'Environmental DNA analysis requires expert taxonomists and time-consuming manual processes. Automated species identification could accelerate biodiversity research.',
    techStack: ['Python', 'BioPython', 'scikit-learn', 'XGBoost', 'BLAST', 'Docker'],
    architecture: 'Feature extraction from DNA sequences using k-mer analysis, ensemble classification with gradient boosting, and confidence calibration for uncertainty quantification.',
    results: '94.3% species-level accuracy on test dataset, 10x faster than traditional methods, deployed at 3 research institutions.',
    githubUrl: 'https://github.com/naimish/edna-ml',
    videoUrl: 'https://youtube.com/watch?v=demo4',
    themeColor: '142 71% 45%'
  },
  {
    id: 'disease-detection-posture',
    title: 'Early Disease Detection & Posture Vision',
    domain: 'Healthcare',
    shortDescription: 'AI system for early disease detection through posture analysis and movement patterns.',
    problemStatement: 'Many neurological and musculoskeletal conditions manifest through subtle changes in posture and gait that are difficult to detect in early stages.',
    techStack: ['Python', 'TensorFlow', 'OpenPose', 'Keras', 'React', 'FastAPI'],
    architecture: 'Pose estimation pipeline with temporal modeling using LSTMs, anomaly detection for identifying deviations from healthy movement patterns.',
    results: '89% sensitivity for early Parkinson detection, 92% specificity, currently in clinical trials at partner hospitals.',
    videoUrl: 'https://youtube.com/watch?v=demo5',
    themeColor: '340 82% 52%'
  },
  {
    id: 'ml-graphing-app',
    title: 'Graphing Application for ML Functions',
    domain: 'ML',
    shortDescription: 'Interactive visualization tool for understanding ML activation functions, loss landscapes, and optimization.',
    problemStatement: 'Students and practitioners often struggle to build intuition about ML concepts. Visual, interactive tools can bridge this gap.',
    techStack: ['TypeScript', 'React', 'D3.js', 'WebGL', 'TensorFlow.js', 'Vite'],
    architecture: 'Client-side computation with WebGL acceleration, reactive visualizations with D3, and TensorFlow.js for live model training visualization.',
    results: 'Used by 5000+ students, featured in university ML courses, open-source with 800+ GitHub stars.',
    githubUrl: 'https://github.com/naimish/ml-grapher',
    videoUrl: 'https://youtube.com/watch?v=demo6',
    themeColor: '217 91% 60%'
  },
  {
    id: 'threat-detection-agnostic',
    title: 'Model-Agnostic Learning Method for Threat Detection',
    domain: 'Security',
    shortDescription: 'Meta-learning framework enabling rapid adaptation to new threat types with minimal labeled data.',
    problemStatement: 'Security threats evolve rapidly, but traditional ML models require extensive retraining. A model-agnostic approach could enable faster response to emerging threats.',
    techStack: ['Python', 'PyTorch', 'MAML', 'Weights & Biases', 'Ray', 'Redis'],
    architecture: 'Meta-learning architecture based on MAML with custom few-shot learning heads. Distributed training with Ray for parallel task sampling.',
    results: '85% accuracy on novel threat types with only 5 examples, 10x faster adaptation than baseline fine-tuning approaches.',
    githubUrl: 'https://github.com/naimish/meta-threat',
    videoUrl: 'https://youtube.com/watch?v=demo6',
    themeColor: '0 84% 60%'
  }
];

export const research: Research[] = [
  {
    id: 'patent-adas',
    title: 'Real-Time Visibility Enhancement and Dynamic Threat Scoring System for Vehicles',
    abstract: 'A novel method for fusing LiDAR, camera, and radar data in real-time for autonomous vehicle navigation, achieving state-of-the-art performance in adverse weather conditions.',
    motivation: 'Existing sensor fusion methods struggle in rain, fog, and snow. Our approach uses learned attention weights to dynamically adjust sensor contributions based on environmental conditions.',
    methodology: 'Transformer-based architecture with cross-modal attention layers, trained on a custom dataset of 100,000+ annotated frames across various weather conditions.',
    results: '23% improvement in detection accuracy during adverse weather, 40% reduction in false positives compared to existing methods.',
    status: 'Patent Published',
    patentNumber: '20251109463',
    type: 'patent'
  },
  {
    id: 'paper-few-shot',
    title: 'Model-Agnostic Meta-Learning for Performance Prediction, Risk Scoring, and Model Selection in Cyber Threat Detection',
    abstract: 'We present a meta-learning approach for rapidly adapting threat detection models to new attack vectors with minimal labeled examples.',
    motivation: 'Cybersecurity threats evolve faster than traditional ML pipelines can adapt. Our work addresses the critical need for models that can quickly learn to identify new threats.',
    methodology: 'Prototypical networks with task-specific embedding functions, combined with curriculum learning for improved generalization.',
    results: 'State-of-the-art performance on UNSW-NB15 and CICIDS2017 benchmarks, with 5-shot accuracy exceeding previous 50-shot methods.',
    status: 'Paper Accepted',
    pdfUrl: 'https://arxiv.org/abs/example',
    type: 'paper'
  },
  {
    id: 'paper-edna',
    title: 'Deep Learning for Environmental DNA Metabarcoding',
    abstract: 'A comprehensive deep learning framework for species identification from environmental DNA samples, outperforming traditional bioinformatics pipelines.',
    motivation: 'Environmental DNA (eDNA) analysis is revolutionizing biodiversity monitoring, but current methods require extensive computational resources and expert knowledge.',
    methodology: 'Convolutional neural networks with attention mechanisms for sequence classification, pre-trained on large genomic databases and fine-tuned for eDNA-specific challenges.',
    results: '94.3% species-level accuracy, processing 10x faster than BLAST-based methods, successfully deployed in field studies.',
    status: 'Under Review',
    type: 'paper'
  },
  {
    id: 'patent-ar-jewelry',
    title: 'Aerial Threat Detection & Crowd Dispersion using Deep Learning',
    abstract: 'A adaptive AI system for real time UAV detection,aerial threat classification, predicting trajectory and point of impact, there by mitigating persistent aerial threats. The system further integrates real time crwod density mapping, smart navigation of safe routes for crowd evacuation during emergencies',
    motivation: 'Traditially air defense system have numerous anamolies, our system is a realtime application the brideges these gaps efficiently.',
    methodology: 'Novel face mesh interpolation algorithm combined with PBR rendering pipeline optimized for mobile devices.',
    results: 'Sub-100ms latency on consumer smartphones, 40% reduction in return rates for pilot retailers.',
    status: 'Patent Published',
    type: 'patent'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'understanding-transformers',
    title: 'Understanding Transformers: From Attention to GPT',
    excerpt: 'A deep dive into the transformer architecture that powers modern AI, from the original paper to today\'s large language models.',
    content: 'Full article content here...',
    category: 'Tutorial',
    publishedAt: '2024-01-15',
    videoUrl: 'https://youtube.com/watch?v=tutorial1'
  },
  {
    id: 'yolo-evolution',
    title: 'The Evolution of YOLO: From v1 to v8',
    excerpt: 'Tracing the development of the YOLO family of object detectors and what makes each version unique.',
    content: 'Full article content here...',
    category: 'Tutorial',
    publishedAt: '2024-02-20'
  },
  {
    id: 'deploying-ml-edge',
    title: 'Deploying ML Models on Edge Devices: A Practical Guide',
    excerpt: 'Learn how to optimize and deploy machine learning models on resource-constrained edge devices.',
    content: 'Full article content here...',
    category: 'Demo',
    publishedAt: '2024-03-10',
    videoUrl: 'https://youtube.com/watch?v=demo'
  },
  {
    id: 'future-computer-vision',
    title: 'The Future of Computer Vision: Beyond Object Detection',
    excerpt: 'Exploring emerging trends in computer vision including neural radiance fields, diffusion models, and multimodal understanding.',
    content: 'Full article content here...',
    category: 'Opinion',
    publishedAt: '2024-04-05'
  }
];

export const resumes: Resume[] = [
  {
    id: 'ml-engineer',
    title: 'Machine Learning Engineer',
    role: 'ML Engineer',
    description: 'Focus on production ML systems, model optimization, and MLOps.',
    downloadUrl: '/resumes/naimish-ml-engineer.pdf'
  },
  {
    id: 'cv-engineer',
    title: 'Computer Vision Engineer',
    role: 'CV Engineer',
    description: 'Emphasis on computer vision, image processing, and real-time systems.',
    downloadUrl: '/resumes/naimish-cv-engineer.pdf'
  },
  {
    id: 'researcher',
    title: 'AI Research Scientist',
    role: 'Research Scientist',
    description: 'Academic-focused resume highlighting publications and research experience.',
    downloadUrl: '/resumes/naimish-researcher.pdf'
  },
  {
    id: 'data-science',
    title: 'Data Scientist',
    role: 'Extracting actionable insights.',
    description: 'Transforming raw data into actionable business solutions.',
    downloadUrl: '/resumes/naimish-dataScience.pdf'
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    role: 'Finding data patterns.',
    description: 'Interpreting complex datasets to provide clear, actionable insights for informed business decisions.',
    downloadUrl: '/resumes/naimish-dataAnalyst.pdf'
  },
  {
    id: 'cryptography',
    title: 'Applied Cryptography Developer',
    role: 'Implementing Secure Encryption Algorithms',
    description: 'Cryptography developer building secure systems through hands-on, project-driven learning.',
    downloadUrl: '/resumes/naimish-cryptography.pdf'
  }
];

export const domainColors: Record<string, string> = {
  'CV': 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
  'ML': 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
  'Security': 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20',
  'Research': 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20',
  'Healthcare': 'bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20'
};
