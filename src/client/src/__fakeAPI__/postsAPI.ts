import { IPost } from '@client/types/types';
import { v4 as uuidv4 } from 'uuid';

class PostsAPI {
  getPosts(): Promise<IPost[]> {
    /* eslint-disable max-len */
    const data: string[][] = [
      [
        'Misha Ganin',
        'New JavaScript Framework Released',
        'The developers behind the popular programming language have just unveiled their latest JavaScript framework, promising improved performance and enhanced developer tools. This release is expected to revolutionize web development.',
      ],
      [
        'Misha Ganin',
        'Security Breach in Major Tech Company',
        'A major tech company recently experienced a security breach, putting millions of user data at risk. The incident has sparked discussions about the importance of cybersecurity and the need for robust protection measures.',
      ],
      [
        'Misha Ganin',
        'AI Breakthrough: Programming by Voice',
        'Researchers have made a groundbreaking discovery, enabling programmers to write code using voice commands. This advancement in artificial intelligence is set to make coding more accessible and efficient.',
      ],
      [
        'Misha Ganin',
        "Open Source Community's Latest Achievement",
        'The open-source community celebrates another milestone with the release of a powerful new tool that simplifies software development. This collaborative effort demonstrates the strength of community-driven development.',
      ],
      [
        'Misha Ganin',
        'Programming Languages Battle for Supremacy',
        'Several programming languages are in fierce competition to become the industry standard. Experts discuss the pros and cons of each language and the future of programming in an ever-evolving landscape.',
      ],
      [
        'Misha Ganin',
        "Blockchain's Impact on Software Development",
        'The influence of blockchain technology on software development is explored in this article. From decentralized applications to smart contracts, blockchain is reshaping how software is created and deployed.',
      ],
      [
        'Misha Ganin',
        'Artificial Intelligence in Code Review',
        'Learn how AI is transforming code review processes. Machine learning algorithms are being used to detect errors, improve code quality, and increase development speed.',
      ],
      [
        'Misha Ganin',
        'Quantum Computing: The Next Frontier',
        'Quantum computing is poised to revolutionize the world of programming. Discover the latest advancements in quantum computing and how they will impact software development.',
      ],
      [
        'Misha Ganin',
        'The Rise of DevOps: A Game Changer',
        'DevOps practices are becoming a standard in software development. This article delves into how DevOps principles are streamlining development, enhancing collaboration, and increasing deployment efficiency.',
      ],
      [
        'Misha Ganin',
        'Ethical Dilemmas in AI Development',
        'As AI technologies continue to advance, ethical concerns arise. Programmers grapple with questions of bias, transparency, and accountability in AI development.',
      ],
      [
        'Misha Ganin',
        'Programming for Quantum Computers',
        'Quantum computing is no longer a distant dream. Learn about the programming languages and techniques being developed to harness the power of quantum computers.',
      ],
      [
        'Misha Ganin',
        'GitLab Acquires Leading DevOps Company',
        'GitLab, a popular platform for software development, has recently acquired a prominent DevOps company. This merger is expected to bring new features and integrations to the development workflow.',
      ],
      [
        'Misha Ganin',
        'The Rust Programming Language Gains Popularity',
        'Rust, known for its safety and performance, is gaining traction among developers. Its growth is discussed in detail, along with its potential to become a dominant language in the future.',
      ],
      [
        'Misha Ganin',
        'The Impact of Cloud-Native Development',
        'Cloud-native development practices are transforming how applications are built and deployed. This article explores the benefits of cloud-native architecture and its impact on programming.',
      ],
      [
        'Misha Ganin',
        "GitHub's Latest Features for Developers",
        "GitHub, a leading platform for version control and collaboration, has introduced new features aimed at making developers' lives easier. Learn about the enhancements that GitHub is offering to the programming community.",
      ],
    ];
    /* eslint-enable max-len */

    const posts: IPost[] = [];

    const randomDate = (start: Date, end: Date): Date =>
      new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

    for (let i = 0; i < data.length; i += 1) {
      const [author, title, content]: string[] = data[i];
      const post: IPost = {
        id: uuidv4(),
        title,
        content,
        image: '',
        author,
        date: randomDate(new Date(2023, 0, 1), new Date()),
      };
      posts.push(post);
    }

    return Promise.resolve(posts);
  }
}

export const postsAPI = new PostsAPI();
