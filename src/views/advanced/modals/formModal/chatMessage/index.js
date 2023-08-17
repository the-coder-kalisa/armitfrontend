import Convert from "ansi-to-html"
import { useMemo, useState } from "react"
import ReactMarkdown from "react-markdown"
import rehypeMathjax from "rehype-mathjax"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"
import MaleTechnology from "../../../assets/male-technologist.png"
import Robot from "../../../assets/robot.png"
import SanitizedHTMLWrapper from "../../../components/SanitizedHTMLWrapper"
import CodeTabsComponent from "../../../components/codeTabsComponent"
import IconComponent from "../../../components/genericIconComponent"
import { classNames } from "../../../utils/utils"
import FileCard from "../fileComponent"

export default function ChatMessage({ chat, lockChat, lastMessage }) {
  const convert = new Convert({ newline: true });
  const [hidden, setHidden] = useState(true);
  const template = chat.template;
  const [promptOpen, setPromptOpen] = useState(false);

  // Move the useMemo hook outside of the conditional rendering
  const markdownContent = useMemo(() => {
    if (chat.message.toString() === "" && lockChat) {
      return (
        <IconComponent
          name="MoreHorizontal"
          className="h-8 w-8 animate-pulse"
        />
      );
    } else {
      return (
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeMathjax]}
          className="markdown prose min-w-full text-primary word-break-break-word dark:prose-invert"
          components={{
            pre({ node, ...props }) {
              return <>{props.children}</>;
            },
            code: ({
              node,
              inline,
              className,
              children,
              ...props
            }) => {
              if (children.length) {
                if (children[0] === "▍") {
                  return (
                    <span className="form-modal-markdown-span">
                      ▍
                    </span>
                  );
                }
                children[0] = children[0].replace("`▍`", "▍");
              }
              const match = /language-(\w+)/.exec(
                className || ""
              );
              return !inline ? (
                <CodeTabsComponent
                  isMessage
                  tabs={[
                    {
                      name: (match && match[1]) || "",
                      mode: (match && match[1]) || "",
                      image:
                        "https://curl.se/logo/curl-symbol-transparent.png",
                      language: (match && match[1]) || "",
                      code: String(children).replace(/\n$/, "")
                    }
                  ]}
                  activeTab={"0"}
                  setActiveTab={() => {}}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            }
          }}
        >
          {chat.message.toString()}
        </ReactMarkdown>
      );
    }
  }, [chat.message, lockChat]);

  // ... (rest of the component)
}
