import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../components/Header";
import LiveBanner from "../components/LiveBanner";
import { NowPlayingRow, ChannelPromoBanner } from "../components/ChannelInfo";
import SectionHeader from "../components/SectionHeader";
import HorizontalCardList from "../components/HorizontalCardList";
import SocialFooter from "../components/SocialFooter";

import {
  liveChannel,
  todaySchedule,
  top10,
  featuredVideos,
  latestReplays,
  singingContests,
  sitcoms,
  latestMusic,
  newsItems,
} from "../data/mockData";
import { getCurrentProgram } from "../utils/schedule";
import useNow from "../utils/useNow";
import { colors } from "../theme/colors";

export default function HomeScreen({ navigation }) {
  const openPlaceholder = (title) => navigation.navigate("Placeholder", { title });
  const now = useNow();
  const currentProgram = getCurrentProgram(todaySchedule, now);

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <Header navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <LiveBanner
          channel={liveChannel}
          onPressPlay={() => navigation.navigate("LiveDetail")}
        />
        <NowPlayingRow program={currentProgram} />
        <ChannelPromoBanner onPressSchedule={() => navigation.navigate("ScheduleTab")} />

        <SectionHeader
          title="Top10 รายการยอดนิยม"
          onSeeAll={() => openPlaceholder("Top10 รายการยอดนิยม")}
        />
        <HorizontalCardList
          data={top10}
          variant="poster"
          showRank
          onItemPress={(item) => openPlaceholder(item.title)}
        />

        <SectionHeader
          title="วิดีโอแนะนำ"
          onSeeAll={() => openPlaceholder("วิดีโอแนะนำ")}
        />
        <HorizontalCardList
          data={featuredVideos}
          variant="landscape"
          onItemPress={(item) => openPlaceholder(item.title)}
        />

        <SectionHeader
          title="รายการย้อนหลังล่าสุด"
          onSeeAll={() => navigation.navigate("ReplayTab")}
        />
        <HorizontalCardList
          data={latestReplays}
          variant="landscape"
          onItemPress={(item) => openPlaceholder(item.title)}
        />

        <SectionHeader
          title="ประกวดร้องเพลง"
          onSeeAll={() => openPlaceholder("ประกวดร้องเพลง")}
        />
        <HorizontalCardList
          data={singingContests}
          variant="poster"
          onItemPress={(item) => openPlaceholder(item.title)}
        />

        <SectionHeader
          title="รายการซิทคอม"
          onSeeAll={() => openPlaceholder("รายการซิทคอม")}
        />
        <HorizontalCardList
          data={sitcoms}
          variant="poster"
          onItemPress={(item) => openPlaceholder(item.title)}
        />

        <SectionHeader
          title="เพลงล่าสุด"
          onSeeAll={() => openPlaceholder("เพลงล่าสุด")}
        />
        <HorizontalCardList
          data={latestMusic}
          variant="square"
          onItemPress={(item) => openPlaceholder(item.title)}
        />

        <SectionHeader
          title="ข่าวสาร"
          onSeeAll={() => navigation.navigate("NewsTab")}
        />
        <HorizontalCardList
          data={newsItems}
          variant="landscape"
          onItemPress={(item) => openPlaceholder(item.title)}
        />

        <SocialFooter onPressLink={(link) => openPlaceholder(link.id.toUpperCase())} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
