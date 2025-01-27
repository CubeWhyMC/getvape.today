import * as React from "react";
import {useEffect, useRef, useState} from "react";
import {Pause, Play, SkipBack, SkipForward} from "lucide-react";

import dingzhenAndRelx from "../../assets/songs/dingzhen-and-relx.mp3"
import mantheAndDingZhen from "../../assets/songs/manthe-and-dingzhen.mp3"
import smokeAndDream from "../../assets/songs/smoke-and-dream.mp3"
import snowLeopard from "../../assets/songs/snow-leopard-and-dingzhen.mp3"

const tracks = [
    {title: "满特与丁真", author: "xrl, TianmuTNT, cubewhy, suno, ChatGPT", src: mantheAndDingZhen},
    {title: "丁真和电子烟", author: "TianmuTNT, suno, ChatGPT", src: dingzhenAndRelx},
    {title: "丁真：雾与梦", author: "ChatGPT, suno", src: smokeAndDream},
    {title: "顶针与雪豹", author: "ChatGPT, suno", src: snowLeopard}
];

const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
};

function MusicPlayer() {
    const [currentTrack, setCurrentTrack] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef<HTMLAudioElement>(null);

    // 播放或暂停音乐
    const togglePlayPause = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
        setDuration(audioRef.current.duration);
    };

    // 处理音频进度更新
    const handleTimeUpdate = () => {
        if (!audioRef.current) return;
        const percent = (audioRef.current.currentTime / audioRef.current.duration) * 100;
        setProgress(percent);
    };

    // 切换歌曲
    const changeTrack = (direction: "next" | "prev") => {
        let newIndex = currentTrack + (direction === "next" ? 1 : -1);
        if (newIndex < 0) newIndex = tracks.length - 1;
        if (newIndex >= tracks.length) newIndex = 0;
        setCurrentTrack(newIndex);
        setIsPlaying(true);
        if (!audioRef.current) return;
        setDuration(audioRef.current.duration);
    };

    // 监听进度条变化
    const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!audioRef.current) return;
        audioRef.current.currentTime = (Number(event.target.value) / 100) * audioRef.current.duration;
        setProgress(Number(event.target.value));
    };

    // 监听歌曲播放结束
    const handleEnded = () => {
        changeTrack("next");
    };

    // 当切换歌曲时，自动播放
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = tracks[currentTrack].src;
            if (isPlaying) {
                audioRef.current.play();
            }
        }
    }, [currentTrack]);

    return (
        <div
            className="flex flex-col items-center bg-white/10 border border-white/30 shadow-lg p-6 rounded-lg backdrop-blur-2xl w-full sm:w-96 hover:scale-110 sm:hover:scale-125 transition-all ease-in-out duration-300">
            <h2 className="text-xl font-bold">{tracks[currentTrack].title}</h2>
            <p className="font-bold text-gray-500 dark:text-gray-300">{tracks[currentTrack].author}</p>

            {/* 音频元素 */}
            <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} onEnded={handleEnded}/>

            {/* 进度条 */}
            <input
                type="range"
                value={progress}
                onChange={handleSeek}
                className="w-full mt-4 cursor-move"
                min="0"
                max="100"
            />

            <div className="flex justify-between text-xs text-gray-300 mt-1">
                <span>{formatTime(progress)}</span>
                <span>/</span>
                <span>{formatTime(duration)}</span>
            </div>

            {/* 播放控制按钮 */}
            <div className="flex items-center gap-4 mt-4">
                <button onClick={() => changeTrack("prev")} className="p-2 bg-gray-300 dark:bg-gray-700 rounded-full hover:bg-blue-500 cursor-pointer">
                    <SkipBack size={24}/>
                </button>
                <button onClick={togglePlayPause} className="p-4 bg-blue-500 rounded-full hover:bg-blue-300 cursor-pointer">
                    {isPlaying ? <Pause size={32}/> : <Play size={32}/>}
                </button>
                <button onClick={() => changeTrack("next")} className="p-2 bg-gray-300 dark:bg-gray-700 rounded-full hover:bg-blue-500 cursor-pointer">
                    <SkipForward size={24}/>
                </button>
            </div>
        </div>
    );
}

export default MusicPlayer;